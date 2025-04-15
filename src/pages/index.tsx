import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Flex, Text, Button, VStack, Box } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gerencie sua Barbearia</title>
        <meta name="description" content="Simplifique a gestão da sua barbearia com nossa plataforma. Experimente agora!" />
      </Head>

      {/* HEADER */}
      <Flex
        as="header"
        bg="barber.900"
        color="gray.200"
        px={{ base: '4', md: '8' }}
        py="5"
        justify="space-between"
        align="center"
        shadow="lg"
      >
        <Image src="/logo.png" alt="Logo da Barbearia" width={120} height={120} priority />
        <Link href="/login" passHref>
          <Button as="a" bg="button.cta" color="barber.900" size="lg" _hover={{ opacity: 0.9 }}>
            Entrar
          </Button>
        </Link>
      </Flex>

      {/* HERO */}
      <Flex
        as="section"
        bg="barber.900"
        color="white"
        minH="100vh"
        align="center"
        justify="center"
        textAlign="center"
        px="6"
        py="16"
        direction="column"
        bgImage="url('/hero-bg.jpg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Box maxW="900px" textAlign="center">
          <Text fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }} fontWeight="bold" color="orange.400" mb="4">
            Transforme sua Barbearia com a Melhor Plataforma de Gestão
          </Text>
          <Text fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} color="gray.100" mb="8">
            Simplifique sua rotina, organize seus agendamentos, controle o financeiro e fidelize seus clientes. 
            Tudo isso em uma única plataforma intuitiva e eficiente, feita para atender todas as suas necessidades.
          </Text>
          <VStack spacing="4">
            <Link href="/login" passHref>
              <Button
                as="a"
                bg="button.cta"
                color="barber.900"
                size="lg"
                px="8"
                _hover={{ bg: 'orange.500', color: 'white' }}
              >
                Experimente Agora
              </Button>
            </Link>
            <Button
              as="a"
              href="https://github.com/m4riott0"
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<FaGithub />}
              bg="gray.700"
              color="white"
              size="lg"
              px="8"
              _hover={{ bg: 'gray.600' }}
            >
              Visite meu GitHub
            </Button>
          </VStack>
        </Box>
      </Flex>

      {/* FOOTER */}
      <Flex
        as="footer"
        bg="barber.900"
        color="gray.300"
        py="6"
        px={{ base: '4', md: '6' }}
        justify="center"
        align="center"
        borderTop="1px solid"
        borderColor="gray.700"
      >
        <Text fontSize={{ base: 'xs', md: 'sm' }}>© 2025. Todos os direitos reservados.</Text>
      </Flex>
    </>
  )
}
