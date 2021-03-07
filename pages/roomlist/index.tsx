import { useState } from 'react';
import CreateRoomModal from 'components/CreateRoomModal';

function RoomList() {
  const [isCreateModalOn, setIsCreateModalOn] = useState<boolean>(false);

  return (
    <div className="relative h-screen transform">
      <button
        className="fixed right-3 bottom-3 bg-primary w-12 h-12 rounded-50 text-white focus:outline-none"
        onClick={() => setIsCreateModalOn(prev => !prev)}
      >
        +
      </button>
      {isCreateModalOn && <CreateRoomModal />}
    </div>
  );
}

export default RoomList;
