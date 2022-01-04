import Icon from 'src/component/Icon';
import Container from './Container';

export default function Claim() {
  return (
    <div className="w-full -mt-2">
      <div className="flex justify-center flex-wrap mx-auto pl-4">
        <Container
          onClick={() => {}}
          buttonTitle="Claim KGC"
          className="col-span-1 w-[19rem] m-2"
        >
          <>
            <Icon name="bnb" className="w-10 h-10" />
            <div className="font-bold text-xs text-primary-100 pt-1 leading-5">
              Lorem ipsum
            </div>

            <div className="text-white leading-6 pt-1 font-bold">x0</div>
          </>
        </Container>

        <Container
          onClick={() => {}}
          buttonTitle="Claim ..."
          className="col-span-1 w-[19rem] m-2"
        >
          <div className="flex w-full px-4 justify-between">
            <div className="flex flex-col items-center">
              <Icon name="bnb" className="w-10 h-10" />
              <div className="font-bold text-xs text-primary-100 pt-1 leading-5">
                Lorem ipsum
              </div>

              <div className="text-white leading-6 pt-1 font-bold">x0</div>
            </div>

            <Icon name="arrow_right_white" className="w-12 h-12" />

            <div className="flex flex-col items-center">
              <Icon name="bnb" className="w-10 h-10" />
              <div className="font-bold text-xs text-primary-100 pt-1 leading-5">
                Lorem ipsum
              </div>

              <div className="text-white leading-6 pt-1 font-bold">x0</div>
            </div>
          </div>
        </Container>

        <Container
          onClick={() => {}}
          buttonTitle="Claim KGC"
          className="col-span-1 w-[19rem] m-2"
        >
          <>
            <Icon name="bnb" className="w-10 h-10" />
            <div className="font-bold text-xs text-primary-100 pt-1 leading-5">
              Lorem ipsum
            </div>

            <div className="text-white leading-6 pt-1 font-bold">x0</div>
          </>
        </Container>
      </div>
    </div>
  );
}
