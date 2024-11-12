import Account from '../components/Account.tsx';
import PageTitle from '../components/PageTitle.tsx';
import NavBar from '../components/NavBar.tsx'

const AccountPage = () =>
{
    return(
        <div>
            <NavBar />
            <PageTitle />
            <Account />
        </div>
    );
};

export default AccountPage;