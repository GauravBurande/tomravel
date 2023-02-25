import React,{useEffect,useState} from 'react'
import WorkingOn from './utils/WorkingOn';
import axios from 'axios';

const Translations = () => {

  const [options, setOptions] = useState([]);
  const [to, setTo] = useState('en');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
    const [array, setArray]  = useState([])
  
    const defaultText = ["Hello","How are you", "My name is George", " Thank you","Where is this place"]



    const defaultTranslate = () => {
        setArray([])
        defaultText.map((text) => {
            const params = new URLSearchParams();
            params.append('q', text);
            params.append('source', 'en');
            params.append('target', to);
            params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

            axios.post('https://libretranslate.de/translate',params, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            }).then(res=>{
            console.log(res.data)
            let x = res.data.translatedText
            array.push(x)
            setArray([...array])
            console.log(array)
            
            })
        })
    }

  const translate = () => {
   
    const params = new URLSearchParams();
    params.append('q', input);
    params.append('source', 'en');
    params.append('target', to);
    params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

    axios.post('https://libretranslate.de/translate',params, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(res=>{
      console.log(res.data)
      setOutput(res.data.translatedText)
    })
  };

  useEffect(() => {
    axios
      .get('https://libretranslate.de/languages', {
        headers: { accept: 'application/json' },
      })
      .then((res) => {
        console.log(res.data);
        setOptions(res.data);
      });
  }, []);
  return (
    <>
      <div className='pl-20' >
        <h1 className='lg:text-5xl text-4xl font-bold py-3 pb-10'>Translation</h1>
        Select Language : <select className='bg-transparent border border-solid rounded-lg focus:bg-black' onChange={(e) => setTo(e.target.value)}>
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>  
      
      <button className='border border-solid rounded-lg ' onClick={defaultTranslate}>Translate</button>
      <h3>Hello    ----   {array[0]}</h3>
      <h3>How are you? ----  {array[1]}</h3>
      <h3>My name is George -----  {array[2]}</h3>
      <h3>Thank you ------  {array[3]}</h3>
      <h3 className='pb-10'>Where is this place ------  {array[4]}</h3>
      
      Enter text to translate     
      <div>
        
        <textarea className='bg-transparent pt-10 border border-solid rounded-lg'
          onInput={(e) => setInput(e.target.value)}
        ></textarea>
      </div>
            Translated text
      <div>
        <textarea className='bg-transparent pt-10 border border-solid rounded-lg' value={output}></textarea>
      </div>
      <div>
        <button className='border border-solid rounded-lg' onClick={e=>translate()}>Translate</button>
      </div>
      </div>
    </>
  )
}

export default Translations
