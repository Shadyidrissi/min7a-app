import React from 'react'
import '../pages.style.css'
import Link from 'next/link'

function page() {
  return (
    <>
        <header className='header-countries'>
            <h2>countries</h2>
            <ul>
                <button href=''> <img src="" alt="" name='xx' /> </button>
                <button href=''> <img src="" alt="" name='xx' /> </button>
                <button href=''> <img src="" alt="" name='xx' /> </button>
                <button href=''> <img src="" alt="" name='xx' /> </button>
                <button href=''> <img src="" alt="" name='xx' /> </button>
            </ul>
        </header>
        <section className='section-countries'>
            <header>
                <button>Show Only Mina7</button>
                <button>Show Only Contrat</button>
                <button>Show Contrat & Min7a</button>
            </header>
            <div className='search-div'>
                <button>
                <svg width="50" height="50" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 24 24" fill="currentColor" x="128" y="128" role="img"  xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path fill="currentColor" d="M10 2.5a7.5 7.5 0 0 1 5.964 12.048l4.743 4.745a1 1 0 0 1-1.32 1.497l-.094-.083l-4.745-4.743A7.5 7.5 0 1 1 10 2.5Zm0 2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11Z"/></g></svg></svg>
                </button>
            </div>
        </section>
        <div className='body-div'>
            {/* fetch api data */}
            data on here 
        </div>
    </>
  )
}

export default page