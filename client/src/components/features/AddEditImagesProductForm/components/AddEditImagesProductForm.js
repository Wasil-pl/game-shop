import React, { useEffect, useState } from 'react';
import styles from './AddEditImagesProductForm.module.scss';
import { Button, Form } from 'react-bootstrap';
import ImageUpload from './ImageUpload';
import { IMAGES_URL } from '../../../../config';
import { removeLastNumberSegment } from '../../../../Utils/removeLastNumberSegment';
import { errorMessages } from '../../../../consts/errorMesages';
import { patterns } from '../../../../consts/patterns';
import { fileNames, labels } from '../../../../consts/constants';

export const AddEditImagesProductForm = ({
  action,
  actionText,
  defaultValues,
}) => {
  const [files, setFiles] = useState(Array(6).fill(null));
  const [selectedFileName, setSelectedFileName] = useState(Array(6).fill(''));
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

    const getImages = async () => {
      const imageProperties = [
        'mainPicture',
        'pictureOne',
        'pictureTwo',
        'pictureThree',
        'pictureFour',
        'pictureFive',
      ];

      const fetchedFiles = await Promise.all(
        imageProperties.map(async (property) => {
          const imageFileName = defaultValues[property];
          if (!imageFileName) return null;

          const response = await fetch(IMAGES_URL + imageFileName);
          const parsedData = await response.blob();
          const originalFileName = removeLastNumberSegment(imageFileName);

          return new File([parsedData], originalFileName, {
            type: parsedData.type,
          });
        }),
      );

      const fetchedFileNames = fetchedFiles.map((file) =>
        file ? file.name : '',
      );

      setFiles(fetchedFiles);
      setSelectedFileName(fetchedFileNames);
    };

    getImages();
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
              const newSelectedFileName = [...selectedFileName];

              newFiles[index] = file;
              newSelectedFileName[index] = file ? file.name : '';

              setFiles(newFiles);
              setSelectedFileName(newSelectedFileName);
            }}
            selectedFileName={selectedFileName[index]}
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
