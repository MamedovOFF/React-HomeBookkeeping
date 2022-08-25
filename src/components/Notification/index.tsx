import { useDispatch, useSelector } from 'react-redux'
import { IDefaultStore } from '../../types/IDefaaultStore'
import { useEffect } from 'react'

const Notification = () => {
  const dispatch = useDispatch()
  const notificationList = useSelector((state: IDefaultStore) => state?.notification)
  const clearNotification = (id: number) => {
    dispatch({ type: 'ClEAR_NOTIFICATION', payload: id })
  }
  useEffect(() => {
    setTimeout(() => {
      clearNotification(notificationList[0].id)
    }, 2000)
    // eslint-disable-next-line
  }, [notificationList])

  if (!notificationList?.length) return null

  return (
    <>
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: '11' }}>
        {notificationList?.map((el) => (
          <div id="liveToast" className="toast show" role="alert" aria-live="assertive" aria-atomic="true" key={el.id}>
            <div className="toast-header">
              <img
                src={require('../../assets/img/logo-bookkeping.png')}
                height="25"
                width="25"
                className="rounded me-2"
                alt="..."
              />
              <strong className="me-auto">Notification</strong>
              <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" />
            </div>
            <div className="toast-body">{el.message}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Notification
