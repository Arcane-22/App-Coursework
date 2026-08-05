import './StatCard.css';

const StatCard = ({ variant, value, label, icon }) => {
  return (
    <li className={`stat ${variant}`}>
      <span className="stat-icon" aria-hidden="true">{icon}</span>
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </li>
  );
};

export default StatCard;

