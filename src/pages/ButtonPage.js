import Button from "../components/Button";
function ButtonPage() {

 // You can use the handle... that you prefer because 
 // this component has ...rest as props
    // Function of Button Component
    const handleClick = () => {
        console.log('click!!');
    }
  return (
    <div>
        <Button  onClick={handleClick} primary rounded >
            Cargar
        </Button>
        <Button mx-3 secondary >
            Demo
        </Button>
        <Button success >
            Click Here!
        </Button>
        <Button darkMode>
            Turn Back
        </Button>
        <Button warning >
            Send
        </Button>
        <Button danger rounded>
            Dismiss
        </Button>
    </div>
  );
}

export default ButtonPage;