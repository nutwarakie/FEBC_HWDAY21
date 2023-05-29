import { useForm } from 'react-hook-form';
import { useState } from 'react';


type Inputs = { weight: number,displayMode: string  };

const WaterIntakeCalculator = () => {
    const [DisMode,setDisplayMode] = useState<string>();

    const { register, handleSubmit } = useForm<Inputs>();
    const [Result, setResult] = useState<number>(0);


    const onSubmit = (data: any)=> {
        setResult(+((data.weight*2.2*30)/2).toFixed(2));
        console.log(Result);
        
    }
    const onChangeMode = (data:any)=>{
        setDisplayMode(data.displayMode);   
        console.log(DisMode);   
    
}
    return (
            <>
            <style>{DisMode == "🌙 Dark"? 'body { background-color: #242424; }' :'body { background-color: #f7f5ee; }'}</style>
            <h1 className={DisMode == "🌙 Dark"? 'h_dark' :'h_light'}>💧ควรดื่มนํ้าวันละเท่าไหร ?</h1>
            <h1 className={DisMode == "🌙 Dark"? 'h_dark' :'h_light'}><span className={DisMode == "🌙 Dark"? 'result_d' :'result_l'}>{Result}</span> มล.</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('weight')} placeholder='นํ้าหนักของคุณ(กิโลกรัม)' className={DisMode == "🌙 Dark"? 'inputfield_d' :'inputfield_l'}/> 
                <div><input type='submit' value='คำนวณ' className={DisMode == "🌙 Dark"? 'calbtn_d' :'calbtn_l'}/></div>
            </form>
            
            <form className='display_mode'>
                <h3 className={DisMode == "🌙 Dark"? 'h_dark' :'h_light'}>Display Mode</h3>
                <select {...register("displayMode")} onClick={handleSubmit(onChangeMode)} className={DisMode == "🌙 Dark"? 'selectfeild_d' :'selectfeild_l'}>
                    <option value="🌙 Dark" >🌙 Dark</option>
                    <option value="☀️ Light">☀️ Light</option>
                </select>
            </form>           
        </>
    )
}

export default WaterIntakeCalculator