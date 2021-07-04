import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import NextLink from 'next/link'

const Header = () => {
  return (
    <Breadcrumb fontWeight="medium" fontSize="sm">
      <BreadcrumbItem>
      <NextLink  href={'/'} passHref>
        <a>
          Home
          </a>
        </NextLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/">Login</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/">Create Account</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Header;
