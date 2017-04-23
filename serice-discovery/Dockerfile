FROM frolvlad/alpine-oraclejdk8:slim
VOLUME /tmp
ADD target/serice-discovery-0.0.1-SNAPSHOT.jar heerdicoveryservice.jar
RUN sh -c 'touch /heerdicoveryservice.jar'
ENV JAVA_OPTS="-Xmx384m -Xms384m -Xss512k -XX:+UseCompressedOops"

CMD  java $JAVA_OPTS -jar heerdicoveryservice.jar 
