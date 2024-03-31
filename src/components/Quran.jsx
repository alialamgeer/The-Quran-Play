import React from 'react'
import "./quran.css"

function Quran() {
  return (
    <div>
        
        <h2> Misheard Rashid Alafasy</h2>
        <audio controls>
        <source src="Surah Fatiha.mp3"
        type="audio/ogg"/>
        </audio>
        <h4>Surah Fatiha</h4>

        <audio controls>
        <source src="Surah Rehman.mp3"
        type="audio/ogg"/>
        </audio>
        <h4>Surah Ar-Rehman</h4>

        <audio controls>
        <source src="Surah Yaseen.mp3"
        type="audio/ogg"/>
        </audio>
        <h4>Surah Yaseen</h4>

        <h2> Abdur-Rehman as-Sudais</h2>
        <audio controls>
        <source src="Surah Fatiha2.mp3"
        type="audio/ogg"/>
        </audio>
        <h4>Surah Fatiha</h4>

        <audio controls>
        <source src="Surah Rehman2.mp3"
        type="audio/ogg"/>
        </audio>
        <h4>Surah Ar-Rehman</h4>

        <audio controls>
        <source src="Surah Yaseen2.mp3"
        type="audio/ogg"/>
        </audio>
        <h4>Surah Yaseen</h4>




        

    </div>
  )
}

export default Quran