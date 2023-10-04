import React, { useEffect } from 'react';
import styles from './AddProductFirstStep.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  Error,
  errorMessages,
  patterns,
  platformOptions,
} from '../../../../consts';
import { addProductContentRequest } from '../../../../redux/products/productThunks';

const AddEditProductFirstStep = ({ nextStep, content }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (content.success) {
      nextStep();
    }
  }, [content, nextStep]);

  const handleSubmit = (data) => {
    const transformedData = {
      ...data,
      pegi: Number(data.pegi),
      inStock: Number(data.inStock),
      price: parseFloat(data.price).toFixed(2),
      salePrice: data.salePrice ? parseFloat(data.salePrice).toFixed(2) : null,
    };
    dispatch(addProductContentRequest(transformedData));
  };

  return (
    <div className={styles.container}>
      <Form
        className={styles.formLayout}
        noValidate
        onSubmit={validate(handleSubmit)}
      >
        <Form.Group className={styles.inputBox}>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            {...register('name', {
              required: errorMessages.required,
            })}
            placeholder="Name"
            autoComplete="name"
            required
          />
          {errors.name && <Error>{errors.name?.message}</Error>}
        </Form.Group>

        <Form.Group className={styles.inputBox}>
          <Form.Label>Language:</Form.Label>
          <Form.Control
            {...register('language', {
              required: errorMessages.required,
              minLength: {
                value: patterns.languageMinLength,
                message: errorMessages.minLength(patterns.languageMinLength),
              },
              maxLength: {
                value: patterns.languageMaxLength,
                message: errorMessages.maxLength(patterns.languageMaxLength),
              },
            })}
            placeholder="Language"
            autoComplete="language"
            required
          />
          {errors.language && <Error>{errors.language?.message}</Error>}
        </Form.Group>

        <Form.Group className={styles.inputBox}>
          <Form.Label>Pegi:</Form.Label>
          <Form.Control
            {...register('pegi', {
              required: errorMessages.required,
            })}
            type="number"
            placeholder="Pegi"
            autoComplete="pegi"
            required
          />
          {errors.pegi && <Error>{errors.pegi?.message}</Error>}
        </Form.Group>

        <Form.Group className={styles.inputBox}>
          <Form.Label>Description:</Form.Label>
          <Form.Control
            {...register('description', {
              required: errorMessages.required,
              minLength: {
                value: patterns.descryptionMinLength,
                message: errorMessages.minLength(patterns.descryptionMinLength),
              },
              maxLength: {
                value: patterns.descryptionMaxLength,
                message: errorMessages.maxLength(patterns.descryptionMaxLength),
              },
            })}
            as="textarea"
            rows={3}
            placeholder="Description"
            autoComplete="description"
            required
          />
          {errors.description && <Error>{errors.description?.message}</Error>}
        </Form.Group>

        <Form.Group className={styles.inputBox}>
          <Form.Label>In stock:</Form.Label>
          <Form.Control
            {...register('inStock', {
              required: errorMessages.required,
              min: {
                value: patterns.numberMin,
                message: errorMessages.minNumber(patterns.numberMin),
              },
            })}
            type="number"
            placeholder="In stock"
            autoComplete="inStock"
            required
          />
          {errors.inStock && <Error>{errors.inStock?.message}</Error>}
        </Form.Group>

        <Form.Group className={styles.inputBox}>
          <Form.Label>Platform:</Form.Label>
          <Form.Control
            {...register('platform', { required: errorMessages.required })}
            as="select"
            placeholder="Platform"
            autoComplete="platform"
            required
          >
            {platformOptions.map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </Form.Control>
          {errors.platform && <Error>{errors.platform?.message}</Error>}
        </Form.Group>

        <Form.Group className={styles.inputBox}>
          <Form.Label>Price:</Form.Label>
          <Form.Control
            {...register('price', {
              required: errorMessages.required,
              min: {
                value: patterns.numberMin,
                message: errorMessages.minNumber(patterns.numberMin),
              },
            })}
            type="number"
            step="0.01"
            placeholder="Price"
            autoComplete="price"
            required
          />
          {errors.price && <Error>{errors.price?.message}</Error>}
        </Form.Group>

        <Form.Group className={styles.inputBox}>
          <Form.Label>Sale price:</Form.Label>
          <Form.Control
            {...register('salePrice', {
              min: {
                value: patterns.numberMin,
                message: errorMessages.minNumber(patterns.numberMin),
              },
            })}
            type="number"
            step="0.01"
            placeholder="Sale price"
            autoComplete="salePrice"
          />
          {errors.salePrice && <Error>{errors.salePrice?.message}</Error>}
        </Form.Group>

        <Form.Group className={styles.buttonBox}>
          <Button type="submit" variant="primary">
            next step
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddEditProductFirstStep;
