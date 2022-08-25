const Notification = () => {
  return (
    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: '11' }}>
      <div id="liveToast" className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
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
        <div className="toast-body">Hello, world! This is a toast message.</div>
      </div>
    </div>
  )
}

export default Notification
