import "./styles.css"

export type ContactCardProps = {
  plan: string;
  price?: string;
  note?: string;
  features: string[];
  className?: string;
  icon?: React.ReactNode;
};

export default function ContactCard({ plan, price, note, features, className, icon }: ContactCardProps) {
  return (
    <div className={`card ${className ?? ""}`}>
      <div className="pricing-block-content">
        
        {/* Plan name */}
        <div className="flex items-center gap-2 plan-row">
          {icon && <span className="plan-icon">{icon}</span>}
          <div className="pricing-plan text-xl zalando-sans ">
            {plan}
          </div>
        </div>
        

        {/* Price */}
        <div className="price-value">{price}</div>

        {/* Optional note */}
        {note && <div className="pricing-note text-lg zalando-sans-expanded">{note}</div>}

        {/* Feature checklist */}
        <div className="check-list">
          {features?.map((item, index) => (
            <div key={index} className="check-list-item">
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
