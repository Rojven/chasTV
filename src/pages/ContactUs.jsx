
const ContactUs = () => (
  <div className="flex flex-col">
    <h2 className="font-bold text-xl text-black dark:text-white mt-4">Связаться с нами</h2>
    <form action="#" className="flex flex-col gap-4 w-full md:w-3/5 text-black dark:text-white mt-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-bold">Ваша почта:</label>
        <input type="text" name="email" placeholder="123@gmail.com" className="rounded-lg p-3 text-black" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-bold">Ваше сообщение:</label>
        <textarea name="message" className="rounded-lg p-3 text-black resize-none" />
      </div>
      <button type="button" className="text-sm p-2 w-[120px] dark:bg-white bg-black rounded-lg dark:hover:bg-gray-100 mt-4 dark:text-black text-white hover:bg-opacity-90">Отправить</button>
    </form>
  </div>
);

export default ContactUs;
