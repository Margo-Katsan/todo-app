import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots 
      height="80" 
      width="80" 
      radius="9"
      color="var(--accent-color)" 
      ariaLabel="three-dots-loading"
      visible={true}
      wrapperStyle={{
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: '5',
      }}
    />
  )
}