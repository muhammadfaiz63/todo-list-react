import DefaultLayout from '../components/layouts/default-layout';
import Commons from '../components/sections/_playground/commons';
import Forms from '../components/sections/_playground/forms';

export default function PlaygroundPage() {
  return (
    <div className="space-y-12">
      <Forms />
      <Commons />
    </div>
  );
}

PlaygroundPage.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
