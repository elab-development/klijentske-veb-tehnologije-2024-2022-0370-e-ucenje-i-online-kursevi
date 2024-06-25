import React from 'react';

export interface TestComponentProps {

  onClick: () => void; // Define the type for onClick prop
=======
  onClick: () => void; 

}

const TestComponent: React.FC<TestComponentProps> = ({ onClick }) => {
  const handleClick = () => {

    onClick(); // Call the onClick function passed as prop
  };

  return (
    // style={{ display: 'none' }}
=======
    onClick(); 
  };

  return (
   

    <div>
      <button onClick={handleClick} name='Test'>
        Test
      </button>
    </div>
  );
};

export default TestComponent;
