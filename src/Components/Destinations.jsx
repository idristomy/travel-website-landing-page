import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight, CalendarDays, Heart, MapPin, Users } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { TRIPS, formatPrice } from '../data/trips.js'
import { scrollToId } from '../lib/scrollTo.js'

function Trip({ trip, picked }) {
  const { t } = useTranslation()
  const { locale } = useParams()
  const [saved, setSaved] = useState(false)
  const city = t(`cities.${trip.key}.name`)
  const country = t(`cities.${trip.key}.country`)

  return (
    <article
      id={`trip-${trip.key}`}
      className={`group lift relative scroll-mt-28 overflow-hidden rounded-[28px] bg-navy ${
        picked ? 'ring-4 ring-brand ring-offset-4' : ''
      }`}
    >
      <div className="relative aspect-[3/4]">
        <img
          src={trip.photo}
          alt={`${city}, ${country}`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)]:group-hover:scale-105"
        />

        <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-navy backdrop-blur">
            <CalendarDays className="size-3.5 text-brand" />
            {t('destinations.days', { count: trip.days })}
          </span>
          <div className="flex items-center gap-2">
            {picked && (
              <span className="rounded-full bg-brand px-3 py-1.5 text-xs font-semibold text-white">
                {t('destinations.picked')}
              </span>
            )}
            <button
              type="button"
              onClick={() => setSaved((s) => !s)}
              aria-pressed={saved}
              aria-label={saved ? t('destinations.unsave', { city }) : t('destinations.save', { city })}
              className="press grid size-9 cursor-pointer place-items-center rounded-full bg-white/90 text-navy backdrop-blur hover:bg-white"
            >
              <Heart className={`size-4 transition-colors ${saved ? 'fill-brand text-brand' : ''}`} />
            </button>
          </div>
        </div>

        <div className="absolute inset-x-3 bottom-3 rounded-[22px] bg-white/95 p-4 backdrop-blur">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="truncate text-xl font-extrabold tracking-tight text-navy">{city}</h3>
              <p className="mt-0.5 flex items-center gap-1 text-sm text-slate">
                <MapPin className="size-3.5 text-brand" />
                {country}
              </p>
            </div>
            <a
              href="#book"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('book')
              }}
              aria-label={`${t('destinations.view')}: ${city}`}
              className="press grid size-11 shrink-0 place-items-center rounded-full bg-navy text-white transition-colors hover:bg-brand"
            >
              <ArrowUpRight className="size-5 rtl:-scale-x-100" />
            </a>
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-line pt-3 text-sm">
            <span className="inline-flex items-center gap-1.5 text-slate">
              <Users className="size-3.5" />
              {t('destinations.group', { count: trip.group })}
            </span>
            <span className="tabular font-bold text-navy">{formatPrice(trip.price, locale)}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

const Destinations = ({ pick }) => {
  const { t } = useTranslation()
  return (
    <section id="destinations" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading title={t('destinations.title')} />
          <p className="max-w-sm text-lg text-slate">{t('destinations.intro')}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {TRIPS.map((trip) => (
            <Trip key={trip.key} trip={trip} picked={pick === trip.key} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destinations
