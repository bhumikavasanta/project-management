import React, { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

const NewProject = ({onAdd, onCancel}) => {

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    const handleSave = () => {
        const enteredTitle = title.current.value;
        const enteredDesc = description.current.value;
        const entereddueDate = dueDate.current.value;

        if(enteredTitle.trim() === '' || enteredDesc.trim() === '' || entereddueDate.trim() === '') {
            console.log('Open');
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDesc,
            dueDate: entereddueDate
        });

            }

    return (
        <>
        <Modal ref={modal} caption="Okay">
            <h2 className='text-xl font-bold text-stone-700 my-4'>
                Invalid Input
            </h2>
            <p className='text-stone-600 mb-4'>
                Make sure to provide a valid value
            </p>
        </Modal>
        <div className='w-[35rem] mt-16'>
            <menu className='flex items-center justify-end gap-4 my-4'>
                <li>
                    <button className='text-stone-800 hover:text-stone-950' onClick={onCancel}>
                        Cancel
                    </button>
                </li>
                <li>
                    <button onClick={handleSave} className='px-6 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title" />
                <Input ref={description} label="Description" textArea/>
                <Input type="date" ref={dueDate} label="Due Date" />
            </div>
        </div>
        </>
    );
}

export default NewProject;
