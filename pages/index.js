import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data-firebase'

export async function getStaticProps(){
  const allData = await getSortedList();
  return{
    props: {allData}
  };
}

export default function Home( {allData} ) {
  return (
    <Layout home>
      <h1>List of Names</h1>
      <div className="list-group">
        {allData && allData.map(
          ({id, name}) => (
            <Link key={id} href={`/persons/${id}`} className="list-group-item list-group-item-action">
              {name}
            </Link>
          )
        )
          
        }
      </div>
    </Layout>
  );
  
}

// npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom