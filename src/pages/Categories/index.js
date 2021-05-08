import React, { useContext, useState, useRef } from "react";
import Table from "../../components/Table";
import { DataContext } from "../../context/DataContext";
import { Formik, Form as FForm, Field } from 'formik';
import * as Yup from 'yup';
import uuid from 'react-uuid';

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
});

const Form = ({title, onSubmit, onCancel, values}) => {
  const formRef = useRef();

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit()
    }
  }

  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full my-6 mx-auto max-w-lg p-4 md:p-0">
          {/*content*/}
          <div className="border-0 rounded shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-lg font-semibold">{title}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onCancel}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <Formik
              initialValues={{
                name: (values && values.name) || '',
              }}
              validationSchema={FormSchema}
              onSubmit={onSubmit}
              innerRef={formRef}
            >
              {({ errors, touched }) => (
                <FForm className="w-full relative p-6">
                  <div className="w-full">
                    <label for="name" className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Category Name
                    </label>
                    <Field name="name" placeholder="Category Name" className="appearance-none block w-full bg-white text-gray-700 border border-gray-500 focus:border-blue-500 rounded py-3 pl-4 pr-48 mb-3 leading-tight focus:outline-none focus:bg-white"/>
                    {errors.name && touched.name ? (
                      <p className="text-red-500 text-xs italic">{errors.name}</p>
                    ) : null}
                  </div>
                </FForm>
              )}
            </Formik>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-gray-500 border border-gray-500 text-xs font-bold uppercase px-4 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onCancel}
              >
                Cancel
              </button>
              <button
                className="ml-2 bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

const Categories = () => {
  const { categories, setCategories } = useContext(DataContext);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleAdd = (values) => {
    setCategories([...categories, {
      id: uuid(),
      ...values
    }]);
    setIsAddModalVisible(false);
  };

  const handleEdit = (values) => {
    setCategories(categories.map((category) => {
        if(category.id === editId){
            return {
                ...category,
                ...values
            }
        }
        return category
    }))
    setIsEditModalVisible(false)
    setEditId(null)
  }

  const handleDelete = (id) => {
    setCategories(categories.filter((category) => category.id !== id))
  }

  const columns = [
    {
      name: "Name",
      dataKey: "name",
    },
    {
      name: "Action",
      dataKey: "action",
      render: (record) => (
        <div className="flex items-center">
          <button onClick={() => {
            setIsEditModalVisible(true)
            setEditId(record.id)
          }} className="flex-shrink-0 outline-none focus:outline-none text-lightBlue-500 text-sm rounded">
            Edit
          </button>
          <button onClick={() => handleDelete(record.id)} className="flex-shrink-0 outline-none focus:outline-none text-lightBlue-500 text-sm ml-4 rounded">
            Delete
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="px-4 md:px-10 mx-auto w-full">
      <div className="w-full">
        <Table
          title="Categories"
          columns={columns}
          data={categories}
          extra={
            <button
              onClick={() => setIsAddModalVisible(true)}
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Add Category
            </button>
          }
        ></Table>
        {isAddModalVisible ? <Form title="Add Category" onSubmit={handleAdd} onCancel={() => setIsAddModalVisible(false)}/> : null}
        {isEditModalVisible ? <Form values={categories.find((category) => category.id === editId)} title="Edit Category" onSubmit={handleEdit} onCancel={() => {
          setIsEditModalVisible(false)
          setEditId(null)
        }}/> : null}
      </div>
    </div>
  );
};

export default Categories;
