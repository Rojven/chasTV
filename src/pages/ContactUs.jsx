import { Formik } from 'formik';

const ContactUs = () => (
  <div className="flex flex-col">
    <h2 className="font-bold text-xl text-black dark:text-white mt-4">Связаться с нами</h2>
    <Formik
      initialValues={{ email: '', text: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = '*Обязательное поле';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = '*Неверный адрес электронной почты';
        }
        if (!values.text) {
          errors.text = '*Обязательное поле';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm({ values: { email: '', text: '' } });
        }, 800);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form
          className="flex flex-col gap-4 w-full md:w-3/5 text-black dark:text-white mt-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-bold">Ваша почта:</label>
            <input
              type="email"
              name="email"
              placeholder="123@gmail.com"
              className="rounded-lg p-3 text-black"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email ? <div className="dark:text-cyan-400 text-orange-500 text-sm">{errors.email}</div> : null}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-bold">Ваше сообщение:</label>
            <textarea
              name="text"
              className="rounded-lg p-3 text-black resize-none min-h-[150px]"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.text}
            />
            {errors.text && touched.text ? <div className="dark:text-cyan-400 text-orange-500 text-sm">{errors.text}</div> : null}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="text-sm p-2 w-[120px] dark:bg-white bg-black rounded-lg dark:hover:bg-gray-100 mt-4 dark:text-black text-white hover:bg-opacity-90"
          >
            Отправить
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default ContactUs;
