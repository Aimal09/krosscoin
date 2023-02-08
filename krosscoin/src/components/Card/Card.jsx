import style from './style.css'

export default function Card(prop) {
    return (
        <>
            <div className={prop.className}>
                <div className="card p-5 w-full rounded-2xl">
                    <img className='card-icon mb-3' src={prop.cardicon} alt="" />
                    <h2 className='text-xl mb-3'>{prop.title}</h2>
                    <p className='text-lg'>{prop.description}</p>
                </div>
            </div>
        </>
    )
}