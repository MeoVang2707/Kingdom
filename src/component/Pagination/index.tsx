import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import { useState } from 'react';
import ArrowLeft from '../Icon/Pagination/ArrowLeft';
// import "./style.scss";
import ArrowRight from '../Icon/Pagination/ArrowRight';
import './style.scss';
interface PaginationProps {
  total: number;
  pageSize: number;
  onChange: (page: number, pageSize: number) => void;
  className?: string;
  scrollOnChangePage?: boolean;
}

export default function PaginationPage(props: PaginationProps) {
  const { total, pageSize, className, onChange, scrollOnChangePage } = props;
  const [val, setVal] = useState(1);

  const handleChangePage = (page: number, pageSize: number) => {
    onChange(page, pageSize);
    setVal(page);
    if (scrollOnChangePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Pagination
      total={total}
      pageSize={pageSize}
      className={`pagination ${className}`}
      onChange={handleChangePage}
      prevIcon={<ArrowLeft fill={val === 1 ? '#868790' : '#E9992A'} />}
      nextIcon={
        <ArrowRight fill={val * pageSize >= total ? '#868790' : '#E9992A'} />
      }
    />
  );
}
