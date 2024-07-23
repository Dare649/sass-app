
const Modal = ({visible, children, onClick}) => {
    if (!visible) return null;
      return (
        <div>
          {
            visible && 
              <div  onClick={onClick} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                {children}
              </div>
          }
        </div>
      )
    }
    
    export default Modal
    