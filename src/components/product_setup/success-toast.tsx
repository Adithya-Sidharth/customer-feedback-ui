interface SuccessToastProps {
  message: string
}

export default function SuccessToast({ message }: SuccessToastProps) {
  return (
    <div className="success-toast">
      <span>✓</span>
      <p>{message}</p>
    </div>
  )
}
