import React, { useEffect, useState } from 'react';
import styles from './AddEditImagesProductForm.module.scss';
import { Button, Form } from 'react-bootstrap';
import { errorMessages, fileNames, labels, patterns } from '../../../../consts';
import ImageUpload from './ImageUpload';
import { IMAGES_URL } from '../../../../config';

export const AddEditImagesProductForm = ({
  action,
  actionText,
  defaultValues,
}) => {
  const [files, setFiles] = useState(Array(6).fill(null));
  const [errors, setErrors] = useState(Array(6).fill(''));

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    const newErrors = files.map((file, index) => {
      if (index === 0 && !file) return errorMessages.requiredFile;
      if (file && !patterns.acceptedFileTypes.includes(file.type))
        return errorMessages.validateFile;
      return '';
    });

    setErrors(newErrors);

    if (newErrors[0]) return;

    files.forEach((file, index) => {
      if (file) {
        formData.append(fileNames[index], file);
      }
    });

    action(formData);
  };

  useEffect(() => {
    if (!defaultValues) return;

    let isMounted = true;

    const getFiles = async () => {
      try {
        const files = await Promise.all(
          fileNames.map(async (fileName) => {
            const response = await fetch(IMAGES_URL + defaultValues[fileName]);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const file = await response.blob();
            return new File([file], fileName, { type: file.type });
          }),
        );
        if (isMounted) {
          setFiles(files);
        }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    getFiles();

    return () => {
      isMounted = false;
    };
  }, [defaultValues]);

  return (
    <div className={styles.container}>
      <Form className={styles.formLayout} noValidate onSubmit={handleSubmit}>
        {labels.map((label, index) => (
          <ImageUpload
            key={label}
            label={label}
            onFileChange={(file) => {
              const newFiles = [...files];
              newFiles[index] = file;
              setFiles(newFiles);
            }}
            error={errors[index]}
          />
        ))}
        <Form.Group className={styles.buttonBox}>
          <Button type="submit" variant="primary">
            {actionText}
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
