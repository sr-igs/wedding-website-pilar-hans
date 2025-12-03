import React from 'react';
import Papa from 'papaparse';
import clientPromise from '../utils/mongodb';

const DownloadPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const password = event.target.password.value;
    window.location.href = `/download?password=${password}`;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit}>
        <input type="password" name="password" placeholder="Enter password" />
        <button type="submit">Download</button>
      </form>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { res, query } = context;
  const { password } = query;

  if (!password) {
    return { props: {} };
  }

  if (password !== process.env.DOWNLOAD_SECRET) {
    res.statusCode = 401;
    res.end('Unauthorized');
    return { props: {} };
  }

  try {
    const client = await clientPromise;
    const db = client.db("weddingRsvpDB");
    const guests = await db.collection("guests_pilar_hans").find({}).toArray();

    const csvData = [];
    guests.forEach(guest => {
      guest.people.forEach(person => {
        csvData.push({
          uniqueCode: guest.uniqueCode,
          summary: guest.summary,
          visitCount: guest.visitCount,
          fullName: person.fullName,
          name: person.name,
          rsvp: person.rsvp,
          dietary: person.dietary,
          song: person.song,
          course: person.other,
          bus: person.bus,
          address: person.address
        });
      });
    });

    const csv = Papa.unparse(csvData);

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="guests.csv"');
    res.end(csv);

  } catch (e) {
    console.error(e);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }

  return { props: {} };
}

export default DownloadPage;