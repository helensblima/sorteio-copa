import './styles.scss'

interface Flag {
  src: string
  alt: string
}

interface CountriesCarouselProps {
  flags: Flag[]
}

export function CountriesCarousel({ flags }: CountriesCarouselProps) {
  const duplicated = [...flags, ...flags]
  return (
    <div className='countries-carousel'>
      <div className='countries-carousel__track'>
        {duplicated.map((flag, index) => (
          <div key={index} className='countries-carousel__card'>
            <img
              className='countries-carousel__flag'
              src={flag?.src}
              alt={flag.alt}
              aria-hidden='true'
            />
          </div>
        ))}
      </div>
    </div>
  )
}
