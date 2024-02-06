import React, { useState } from 'react'

function Encript() {  
    const [responseData, setResponseData] = useState(null);
    const [funcstate, setfuncstate] = useState('encrypt');  
    const [formData, setFormData] = useState({
        frase: '',
        a: 3,
        b: 4
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:8000/frases/' + funcstate, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          const data = await response.json();
          setResponseData(data);
          console.log(data);
        } catch (error) {
          console.error('Error al enviar los datos:', error);
        }
      };

      const handleEndpointChange = (e) => {
        setfuncstate(e.target.value);
      };
    return (
        <div>
        <form onSubmit={handleSubmit}>
          <label>
            Frase:
            <input type="text" name="frase" value={formData.frase} onChange={handleChange} />
          </label>
          <label>
            Valor A:
            <input type="number" name="a" value={formData.a} onChange={handleChange} />
          </label>
          <label>
            Valor B:
            <input type="number" name="b" value={formData.b} onChange={handleChange} />
          </label>
          <select value={funcstate} onChange={handleEndpointChange}>
            <option value="encrypt">Encriptar</option>
            <option value="decrypt">Desencriptar</option>
          </select>

          <button type="submit">Enviar</button>
        </form>


        {responseData && (
        <div>
          <h2>Result:</h2>
          {Object.keys(responseData).map((key) => (
            <div key={key}>
              <h2>{key}:</h2>
              <h4>{responseData[key]}</h4>
            </div>
          ))}
        </div>
      )}
      </div>
    );
  }
  
  export default Encript;
  