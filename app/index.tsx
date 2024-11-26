import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { ArrowCircleUp } from "iconsax-react";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { Button, TextInput } from "react-native-paper";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-light">
      <Container>
        {/* Brand aligned to the left */}
        <Navbar.Brand
          style={{
            color: "#222222",
            fontWeight: "bold",
            fontSize: "24px",
          }}
          href="#home"
        >
          taskbear
        </Navbar.Brand>
        {/* Navbar Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Links and Button aligned to the right */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#home " active className="fw-bold">
              Home
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#explore-jobs">
              Explore Jobs
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#services">
              Services
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#ads-center">
              Ads Center
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#ads-center">
              Support
            </Nav.Link>
            {/* Custom Styled Button */}
            <Nav.Link href="#be-a-bear">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "2px 3px",
                  borderRadius: "20px",
                  border: "1px solid #222222",
                  paddingRight: "10px",
                }}
              >
                <ArrowCircleUp
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    backgroundColor: "#222222",
                    marginRight: "10px",
                  }}
                  color="#eee"
                  variant="Linear"
                  size={24}
                />
                <span>Be a Bear</span>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function Category() {
  return (
    <View
      style={[
        {
          width: "100%",
          padding: 20,
          backgroundColor: "#F8F9FA",
          flexGrow: 1,
        },
      ]}
    >
      <h5
        style={{
          color: "#03643C",
          textAlign: "center",
        }}
      >
        SMART WAY TO START YOUR JOURNEY
      </h5>
      <h1
        className="fw-bold text-center"
        style={{
          color: "#404145",
          textAlign: "center",
          marginTop: 10,
        }}
      >
        Boost every part of your business <br /> from offer to payment
      </h1>
    </View>
  );
}

const Index = () => {
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 768;
  const bgImage = require("../assets/images/bgHome.png");

  return (
    <ScrollView style={{ flex: 1 }}>
      {/* Navbar */}
      <NavBar />
      {/* Hero Section */}
      <ImageBackground
        source={bgImage}
        style={[
          styles.imageBackground,
          { height: isLargeScreen ? ("70vh" as any) : ("80vh" as any) },
        ]}
        imageStyle={styles.imageStyle}
      >
        {/* Hero Text */}
        <Text style={[styles.heroText, { fontSize: isLargeScreen ? 48 : 32 }]}>
          Explore your working with{"\n"}
          Taskbear.
        </Text>

        {/* Search Box */}
        <View
          style={[
            styles.searchContainer,
            {
              flexDirection: isLargeScreen ? "row" : "column",
              width: isLargeScreen ? "60%" : "90%",
            },
          ]}
        >
          {/* Job Title Input */}
          <TextInput
            style={[
              styles.input,
              {
                marginRight: isLargeScreen ? 10 : 0,
                marginBottom: isLargeScreen ? 0 : 10,
              },
            ]}
            placeholder="Job title or keyword"
            placeholderTextColor="#999"
          />
          {/* Location Input */}
          <TextInput
            style={[
              styles.input,
              {
                marginRight: isLargeScreen ? 10 : 0,
                marginBottom: isLargeScreen ? 0 : 10,
              },
            ]}
            placeholder="Location"
            placeholderTextColor="#999"
          />
          {/* Get Offers Button */}
          <Button
            mode="contained"
            onPress={() => console.log("Get Offers")}
            style={[
              styles.button,
              {
                width: isLargeScreen ? "auto" : "80%",
                height: isLargeScreen ? "auto" : 50,
                justifyContent: "center",
              },
            ]}
            labelStyle={styles.buttonText}
          >
            Get Offers
          </Button>
        </View>
        {/* Popular Tags */}
        <Text style={styles.popularText}>
          Popular: UI Designer, UX Researcher, Android, Admin
        </Text>
      </ImageBackground>
      {/* Category */}
      <Category />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "5%",
  },
  imageStyle: {
    resizeMode: "cover",
  },
  heroText: {
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
  },
  searchContainer: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#03643C",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 25,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 0,
    backgroundColor: "transparent",
    color: "#FFF",
    height: 40,
    borderColor: "transparent",
    borderBottomColor: "#D6DDEB",
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: "#28a745",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  popularText: {
    marginTop: 10,
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
  },
});
export default Index;
