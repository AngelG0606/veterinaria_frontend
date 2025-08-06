

type AddCitaFormProps = {
    setOpenModal : (value : boolean) => void
}

export default function AddCitaForm( {setOpenModal} : AddCitaFormProps) {

    console.log(setOpenModal)
  return (
    <form className='max-w-xl space-y-10 mt-10'>

        <div className='px-5 flex justify-between items-center'>
            <label htmlFor="" className='font-bold'>Fecha</label>
            <input type="date" />
        </div>

        <div className='px-5 flex justify-between items-center'>
            <label htmlFor="" className='font-bold'>Hora</label>
            <input type="time" />
        </div>
    </form>
  )
}
