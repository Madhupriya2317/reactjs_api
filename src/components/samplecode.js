import React,{useState} from "react"

const Form = () => {
  const [gender, setGender] = React.useState('');

 const handleChange = (event) => {
    setGender(event.target.value)
  }

  const resetRadioState = () => {
    setGender('');
  }
  return (
    <form className="radiosample">
      <p>Gender</p>
      <div>
        <input
          type="radio"
          value="male"
          checked={gender === 'male'}
          onChange={handleChange}
        /> Male
      </div>
      <div>
        <input
          type="radio"
          value="female"
          checked={gender === 'female'}
          onChange={handleChange}
        /> Female
      </div>
      <div>
        <input
          type="radio"
          value="transgender"
          checked={gender === 'transgender'}
          onChange={handleChange}
        /> Transgender
      </div>
      <div>
        <button
          type="reset"
          onClick={resetRadioState}
        >reset</button>
      </div>
    </form>
  )
}

export default Form;