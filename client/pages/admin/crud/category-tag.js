import Link from 'next/link';
import Admin from '../../../components/auth/Admin';
import Category from '../../../components/crud/Category';
import Tag from '../../../components/crud/Tag';
import Layout from '../../../components/Layout';

const CategoryTag = () => {
  return (
    <Layout>
      <Admin>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 pt-5 pb-5'>
              <h2>Manage Categories and Tags</h2>
            </div>
            <div className='col-md-6'>
              <h4 className='text-secondary'>Categories</h4>
              <Category />
            </div>
            <div className='col-md-6'>
              <h4 className='text-secondary'>Tags</h4>
              <Tag />
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default CategoryTag;
