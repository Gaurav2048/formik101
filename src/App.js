import "./styles.css";
import { Formik } from "formik";
import { object, string, number, array } from "yup";
import Friends from "./Friends";

export default function App() {
  const initialValue = {
    name: "",
    email: "",
    age: 0,
    address: {
      address1: "",
      address2: ""
    },
    friends: [
      {
        name: "",
        xyz: ""
      }
    ]
  };

  const handleChange = (data) => {
    alert("Form submitting");
  };

  const validationSchema = object({
    name: string().required("hey xyz! Enter name"),
    friends: array().of(
      object({
        name: string().required()
      })
    )
  });

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleChange}
      validationSchema={validationSchema}
    >
      {(formikProps) => (
        <div>
          <input
            placeholder="name"
            name="name"
            value={formikProps.values.name}
            onChange={formikProps.handleChange}
          />
          <div> {formikProps.errors.name} </div>
          {/* <input
            placeholder="email"
            name="email"
            value={formikProps.values.email}
            onChange={formikProps.handleChange}
          />
          <input
            placeholder="age"
            name="age"
            value={formikProps.values.age}
            onChange={formikProps.handleChange}
            type="number"
          /> */}
          <Friends {...formikProps} />
          <button onClick={() => console.log("data", formikProps.values)}>
            {" "}
            Show Data{" "}
          </button>
          <button onClick={formikProps.handleSubmit}> Submit Form </button>
          <button onClick={() => console.log(formikProps.errors)}>
            Print Errors
          </button>
        </div>
      )}
    </Formik>
  );
}
