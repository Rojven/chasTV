import VK, { Comments } from 'react-vk';

const VkComments = ({ elementId, pageId }) => (
  <div className="mt-8 w-full md:w-2/4 mb-8">
    <h2 className="text-black dark:text-white font-bold text-xl mb-4">Оставьте комментарий:</h2>
    <VK apiId={51476870}>
      <Comments options={{ limit: 5, onlyWidgets: true, attach: false }} elementId={elementId} pageId={pageId} />
    </VK>
  </div>
);

export default VkComments;
