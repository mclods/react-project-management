import Input from './common/Input';
import Button from './common/Button';
import { useState } from 'react';

function NewProject({ saveProject, cancelProject }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [errors, setErrors] = useState({
    title: false,
    dueDate: false,
  });

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const onDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const onProjectSave = () => {
    if (title === '' || dueDate === '') {
      setErrors({
        title: !title,
        dueDate: !dueDate,
      });
    } else {
      setErrors({
        title: false,
        dueDate: false,
      });
      saveProject(title, description, dueDate);
    }
  };

  const onCancel = () => {
    setTitle('');
    setDescription('');
    setDueDate('');
    setErrors({
      title: false,
      dueDate: false,
    });
    cancelProject();
  };

  return (
    <section className="pl-10 pr-48">
      <div className="flex justify-end gap-x-3 mt-2 mb-2">
        <Button type="light" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onProjectSave}>Save</Button>
      </div>
      <div>
        <Input
          label="Title *"
          type="text"
          value={title}
          onChange={onTitleChange}
          error={errors.title}
        />
        <Input
          label="Description"
          type="textarea"
          value={description}
          onChange={onDescriptionChange}
        />
        <Input
          label="Due Date *"
          type="date"
          value={dueDate}
          onChange={onDueDateChange}
          error={errors.dueDate}
        />
      </div>
    </section>
  );
}

export default NewProject;
