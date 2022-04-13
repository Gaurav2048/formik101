import { FieldArray } from "formik";

const Friends = (formikProps) => {
  const { values, setFieldValue } = formikProps;
  return (
    <div>
      <h4>Friends Data</h4>
      <FieldArray name="friends">
        {({ push, remove }) => (
          <div
            style={{
              backgroundColor: "lightblue",
              padding: "10px",
              display: "flex"
            }}
          >
            {values.friends.map((friend, index) => (
              <div
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  width: "210px",
                  marginRight: "10px"
                }}
              >
                <input
                  placeholder="Enter name"
                  value={friend.name}
                  onChange={(e) =>
                    setFieldValue(`friends[${index}].name`, e.target.value)
                  }
                />
                <input
                  placeholder="Enter email"
                  value={friend.email}
                  onChange={(e) =>
                    setFieldValue(`friends[${index}].email`, e.target.value)
                  }
                />
                <button onClick={() => remove(index)}>X</button>
              </div>
            ))}
            <button
              onClick={() =>
                push({
                  name: "",
                  email: ""
                })
              }
            >
              Add friends
            </button>
          </div>
        )}
      </FieldArray>
    </div>
  );
};

export default Friends;
