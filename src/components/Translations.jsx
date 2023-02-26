import React,{useEffect,useState} from 'react';
import Loading from './utils/Loading';
import axios from 'axios';

const Translations = () => {

  const [options, setOptions] = useState([]);
  const [to, setTo] = useState('en');
  // const [input, setInput] = useState('');
  // const [output, setOutput] = useState('');
    const [array, setArray]  = useState([])
    const [base, setBase] = useState([])  
    const defaultText = ["Hello","How are you", "My name is George", " Thank you","Where is this place"]



    const defaultTranslate = () => {
      array.splice(0,array.length);
      base.splice(0,base.length);
        
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
            
            array.push(res.data.translatedText)
            setArray([...array])
            base.push(text)
            setBase([...base])
            console.log(base)
            console.log(array)
            
            })
            return 0
        },)
    }

  // const translate = () => {
   
  //   const params = new URLSearchParams();
  //   params.append('q', input);
  //   params.append('source', 'en');
  //   params.append('target', to);
  //   params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

  //   axios.post('https://libretranslate.de/translate',params, {
  //     headers: {
  //       'accept': 'application/json',
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //   }).then(res=>{
  //     //console.log(res.data)
  //     setOutput(res.data.translatedText)
  //   })
  // };

  useEffect(() => {
    axios
      .get('https://libretranslate.de/languages', {
        headers: { accept: 'application/json' },
      })
      .then((res) => {
        setOptions(res.data);
      });
  }, []);


  if(options !== []){
    return (
      <>
        <div className='text-center min-h-[85vh]'>
          <h1 className='lg:text-5xl text-4xl font-bold py-3 pb-10'>Translation</h1>
          <span className=' font-bold py-3 pr-6 pb-10 text-lg '>Select Language :</span><select className='bg-transparent border border-solid rounded-lg focus:bg-black' onChange={(e) => setTo(e.target.value)}>
            {options.map((opt) => (
              <option key={opt.code} value={opt.code}>
                {opt.name}
              </option>
            ))}
          </select>  
        <div className='pt-5 pb-7'>
        <button className='border border-solid rounded-lg p-2 ' onClick={defaultTranslate} >Generate Greetings</button>
        </div>
  
        
        <table className="table-auto text-2xl " align='center'>
          <thead>
          </thead>
          <tbody>
            <tr >
              <td className='pb-4 pr-6' >{base[0]}</td>
              <td className='pb-4 pr-6' >{array[0]}</td>
  
            </tr>
            <tr>
              <td className='pb-4 pr-6' >{base[1]}</td>
              <td className='pb-4 pr-6' >{array[1]}</td>
  
            </tr>
            <tr>
              <td className='pb-4 pr-6' >{base[2]}</td>
              <td className='pb-4 pr-6' >{array[2]}</td>
  
            </tr>
            <tr>
              <td className='pb-4 pr-6' >{base[3]}</td>
              <td className='pb-4 pr-6' >{array[3]}</td>
            </tr>
            <tr>
              <td className='pb-4 pr-6' >{base[4]}</td>
              <td className='pb-4 pr-6' >{array[4]}</td>
            </tr>
          </tbody>
        </table>
  
        {/* Enter text to translate     
        <div>
          
          <input className='bg-transparent pt-10 border border-solid rounded-lg'
            onInput={(e) => setInput(e.target.value)}
          ></input>
        </div>
              Translated text
        <div>
          <div className='bg-transparent pt-10 border border-solid rounded-lg w-48'>{output}</div>
        </div>
        <div>
          <button className='border border-solid rounded-lg' onClick={e=>translate()}>Translate</button>
        </div> */}
        </div>
      </>
    )
  }

  else{
  return(
    <>
      <Loading/>
    </>
  )
  }
  
}

export default Translations
