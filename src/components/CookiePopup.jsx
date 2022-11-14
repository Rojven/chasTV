import { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';

const CookiePopup = () => {
  const [popup, setPopup] = useState(false);
  const [popupShown, setPopupShown] = useLocalStorage('cookiePopup', 'none');
  useEffect(() => {
    if (popupShown === 'none') {
      setPopup(true);
    } else {
      setPopup(false);
    }
  }, [popupShown]);
  return (
    <div className={`${!popup ? 'hidden' : 'fixed'} bottom-3 animate-slideup right-3 bg-[#191624] z-30 md:w-2/5 w-[calc(100%-1.5rem)] p-4 rounded-lg`}>
      <h2 className="font-bold text-lg text-white">Мы ценим вашу конфиденциальность</h2>
      <p className="mt-4 text-sm text-white">Мы используем файлы cookie, чтобы улучшить ваш просмотр, показывать персонализированную рекламу или контент, а также анализировать наш трафик. Нажимая «Принять всё», вы соглашаетесь на использование нами файлов cookie.</p>
      <div className="flex gap-2">
        <button
          onClick={() => setPopupShown('shown')}
          className="text-sm p-2 bg-cyan-200 rounded-lg hover:bg-cyan-300 mt-4"
          type="button"
        >
          Принять всё
        </button>
        <button
          onClick={() => setPopupShown('shown')}
          className="text-sm p-2 bg-white rounded-lg hover:bg-gray-100 mt-4"
          type="button"
        >
          Отказаться
        </button>
      </div>
    </div>
  );
};

export default CookiePopup;
