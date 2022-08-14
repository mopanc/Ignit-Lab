import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import pt  from 'date-fns/locale/pt'
import { Player, Youtube, Poster } from "@vime/react";
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';



interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
  videoId: string;
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>()

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: pt,
  })

  const isActiveLesson = slug === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">
      {availableDateFormatted}
      </span>

      <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
        'bg-green-500': isActiveLesson
      })}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={classNames('flex items-center gap-2 text-sm  font-medium', {
              'text-white': isActiveLesson,
              'text-blue-500': !isActiveLesson
            })}>
              <CheckCircle size={20}/>
              Conteúdo Liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20}/>
              Em breve
            </span>
          )}
          <span className={classNames('text-xs rounded py[0.125rem] px-2 border text-white  font-bold', {
            'border-green-300': !isActiveLesson,
            'border-white': !isActiveLesson
          })}>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <div className="h-full w-full max-w-[220px] max-h-[60vh] aspect-video mt-4 margin-auto">
          <Player>
            <Youtube  videoId={props.videoId}/>
            <Poster />
          </Player>
        </div>
        {/* <div>
          {props.videoId}
        </div> */}
        <strong className={classNames('mt-5 block', {
          'text-white': isActiveLesson,
          'text-gray-200': !isActiveLesson
        })}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}