import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = () => {
    return (
        <div>
          
          <div style={{ width: '100%', height: '600px', marginTop: '20px' }}>
            <iframe
              src="http://localhost:8501"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Streamlit App"
            ></iframe>
          </div>
        </div>
      );
    };
export default Button