import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useParamsUpdate = (pageProps) => {
  const { id } = useParams();
  const [singlePage, setSinglePage] = useState({
    title: '',
    image: null,
    streamUrl: '',
    descr: {},
  });

  const updateSinglePage = () => {
    setSinglePage(singlePage);
    pageProps.map(({ urlId, title, image, streamUrl, descr }) => {
      switch (id) {
        case (urlId):
          return setSinglePage({
            title,
            image,
            streamUrl,
            descr,
          });
        default:
          return ('');
      }
    });
  };

  useEffect(() => {
    updateSinglePage();
  }, [id]);

  const { title, image, streamUrl, descr } = singlePage;

  return { title, image, streamUrl, descr };
};

export default useParamsUpdate;
