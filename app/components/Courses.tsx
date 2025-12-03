"use client";
import Button from './Button';
import './Courses.css'

export default function Courses({
  title,
  subtitle,
  summary,
  className
}: {
  title: string;
  subtitle: string;
  summary: string;
  className?: string;
}) {
  return (
    <div className={`courses-card ${className}`}>
  <div className="card__hero">
    <div className="card__hero-header">
      <h2 className="card__job-title">{title}</h2>
    </div>
    <p className='text-lg font-bold zalando-sans-italic'>{subtitle}</p>
  </div>

  <div className="card__footer">
    <p className="card__job-summary font-semibold text-slate-500">{summary}</p>
    <Button label='Dive In' className="rounded-xl w-32 h-11 text-sm text-center hover:bg-[hsl(213,67%,24%)] text-center" onClick={()=>{}}/>
  </div>
</div>

  );
}
