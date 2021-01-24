import Link from 'next/link';
import Admin from '../../components/auth/Admin';
import Layout from '../../components/Layout';

const AdminIndex = () => {
  return (
    <Layout>
      <Admin>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 pt-5 pb-5'>
              <h2>Admin Dashboard</h2>
            </div>
            <div className='col-md-4'>
              <ul className='list-group'>
                <li className='admin-index list-group-item'>
                  <Link href='/admin/crud/category-tag'>
                    <a className='admin-index-a'>Create Category</a>
                  </Link>
                </li>

                <li className='admin-index list-group-item'>
                  <Link href='/admin/crud/category-tag'>
                    <a className='admin-index-a'>Create tag</a>
                  </Link>
                </li>

                <li className='admin-index list-group-item'>
                  <Link href='/admin/crud/blog'>
                    <a className='admin-index-a'>Create Blog</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-md-8'>right</div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default AdminIndex;
