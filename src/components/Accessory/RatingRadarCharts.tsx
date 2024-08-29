import React from 'react';
import ReactStars from 'react-stars';

const ratings = [
  { name: 'Food', rating: 4.5 },
  { name: 'Service', rating: 4 },
  { name: 'Value', rating: 4 },
  { name: 'Atmosphere', rating: 4 },
];

const RatingRadarChart = () => (
  <div style={styles.container}>
    {ratings.map((item, index) => (
      <div key={index} style={styles.ratingItem}>
        <h3 style={styles.ratingTitle}>{item.name}</h3>
        <ReactStars
          count={5}
          value={item.rating}
          size={36}
          color2={'#ffd700'}
          edit={false}
        />
      </div>
    ))}
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '100%',
    marginTop: "25px"
  },
  ratingItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '15px 0',
    width: '100%',
  },
  ratingTitle: {
    marginBottom: '8px',
    fontSize: '24px',
    fontWeight: '600',
    color: '#333',
  },
};

export default RatingRadarChart;
