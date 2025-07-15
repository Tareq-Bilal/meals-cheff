import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Logo from "../assets/mealschefLogo.png";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import DefaultMealImage from "../assets/defaultMealImg.jpg";
import {
  Container,
  LeftContainer,
  Center,
  RightContainer,
  ThumbImageContainer,
} from "./style/Form.styled";

const NewMeal = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      strMeal: "rice",
      price: 0,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const imgThumb = watch("strMealThumb")
    ? watch("strMealThumb")
    : DefaultMealImage;
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <LeftContainer>
            <h2 className="mb-3 text-center">Add New Meal</h2>
            <Form.Group className="mb-3" controlId="mealName">
              <Form.Label>Meal Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Meal Name"
                {...register("strMeal", {
                  required: "is required",
                })}
              />
              <span>{errors.strMeal?.message}</span>
            </Form.Group>

            <Form.Group className="mb-3" controlId="mealPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Meal Price"
                {...register("price", {
                  required: "is required",
                  min: {
                    value: 1,
                    message: "Minimum Price is 1$",
                  },
                })}
              />
              <span>{errors.price?.message}</span>
            </Form.Group>

            <Form.Group className="mb-3" controlId="mealThumb">
              <Form.Label>Meal Thum</Form.Label>
              <Form.Control
                type="url"
                placeholder="Choose Meal Picture Thumb"
                {...register("strMealThumb", {
                  required: "is required",
                  pattern: {
                    value: /(https?:\/\/.*\.(?:png|jpg|gif))/,
                    message: "Supported Image Url's are (png | jpg | gif)",
                  },
                })}
              />
              <span>{errors.strMealThumb?.message}</span>
            </Form.Group>

            <Form.Group className="mb-3" controlId="mealThumb">
              <Form.Label>Meal Picture(s)</Form.Label>
              <ul>
                <li>
                  <Form.Control
                    type="url"
                    placeholder="Enter New Meal Pircture"
                    {...register("mealPicture", {
                      required: true,
                      // pattern: {
                      //   value: /(https?:\/\/.*\.(?:png|jpg|gif))/,
                      //   message: "Supported Image Url's are (png | jpg | gif)",
                      // },
                    })}
                  />
                </li>
                <li>
                  <Form.Control
                    type="url"
                    placeholder="Enter New Meal Pircture"
                    {...register("mealPicture", {
                      required: true,
                      // pattern: {
                      //   value: /(https?:\/\/.*\.(?:png|jpg|gif))/,
                      //   message: "Supported Image Url's are (png | jpg | gif)",
                      // },
                    })}
                  />
                </li>
                <li>
                  <Form.Control
                    type="url"
                    placeholder="Enter New Meal Pircture"
                    {...register("mealPicture", {
                      required: true,
                      // pattern: {
                      //   value: /(https?:\/\/.*\.(?:png|jpg|gif))/,
                      //   message: "Supported Image Url's are (png | jpg | gif)",
                      // },
                    })}
                  />
                </li>
              </ul>
              {/* <span>{errors.strMealThumb?.message}</span> */}
            </Form.Group>
          </LeftContainer>
          <Center>
            <h4>Ingredients</h4>
            <ul>
              <li>ingredient 1</li>
              <li>ingredient 1</li>
              <li>ingredient 1</li>
            </ul>
          </Center>
          <RightContainer>
            <ThumbImageContainer>
              <img src={imgThumb} alt="" />
            </ThumbImageContainer>
            <Button
              variant="primary"
              type="submit"
              style={{ backgroundColor: "#53CBF0", border: "none" }}
            >
              Add
            </Button>
            <Button variant="outline-secondary" style={{ marginTop: "1rem" }}>
              Cancel
            </Button>
          </RightContainer>
        </Container>
      </Form>
      <DevTool control={control} /> {/* set up the dev tool */}
    </>
  );
};

export default NewMeal;
