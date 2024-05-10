import React from 'react'

function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2'>
                    <h1 className='text-3xl font-bold'>Hello, Welcome's here to learn something <span className='text-pink-600'> new everyday !!!</span></h1>
                    <br/><br/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore aliquam nam tempora laudantium explicabo in adipisci exercitationem? Exercitationem, commodi aliquam! Tempora vel consequatur itaque quis hic incidunt cum fugit adipisci.
                    </p>
                </div>
                <div className='w-full md:w-1/2'>Right</div>
            </div>
        </>
    )
}

export default Banner