import Input from './Input'
import { Phone, Video } from 'lucide-react'
import { FormEvent, useState } from 'react'
import useCallStore from '../stores/useCallStore'
import clsx from 'clsx'

const MessageSearch = () => {
  const { typeCall, setTypeCall } = useCallStore()

  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleCall = () => {
    setTypeCall('audio')
  }

  const handleVideoCall = () => {
    setTypeCall('video')
  }

  return (
    <div
      className={clsx(
        'p-4 border-b flex justify-between gap-4',
        typeCall ? 'flex-col items-start' : 'items-center'
      )}
    >
      <div className="flex gap-x-3 items-center">
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dcat&psig=AOvVaw1P10X_S6zG0RR70Hrkx6Ne&ust=1700143950368000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCNiMuPOXxoIDFQAAAAAdAAAAABAE"
          alt="image"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col">
          <h4 className="font-semibold text-sm">Username</h4>
          <p className="text-xs text-gray-400">Active 1 hour ago</p>
        </div>
      </div>
      <div className={clsx('flex gap-x-4 items-center', typeCall && 'w-full')}>
        <form onSubmit={handleSearch} className={clsx(typeCall && 'w-full')}>
          <Input
            className="h-full"
            inputSize={'sm'}
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit" hidden>
            submit
          </button>
        </form>

        {!typeCall && (
          <>
            <Phone className="cursor-pointer" onClick={handleCall} />
            <Video className="cursor-pointer" onClick={handleVideoCall} />
          </>
        )}
      </div>
    </div>
  )
}

export default MessageSearch